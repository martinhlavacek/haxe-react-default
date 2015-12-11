package loader;

import yloader.valueObject.Response;
import yloader.impl.js.XMLHttpRequestLoader;
import utils.Common;
import yloader.valueObject.Request;
import msignal.Signal;
import model.ImageListItem;

class ImagesLoader
{

    public var responseArrived = new Signal1<ImageListItem>();

    public function new()
    {
    }

    public function loadImages()
    {

        var request = new Request(Common.Url);
        var xmlLoader = new XMLHttpRequestLoader(request);
        xmlLoader.onResponse = onResponse;
        xmlLoader.load();
    }

    private function onResponse(response: Response)
    {
        if(response.success)
        {
            var list = haxe.Json.parse(response.data);

            responseArrived.dispatch(list);
        }
        else
        {
            trace("request failed");
        }
    }
}