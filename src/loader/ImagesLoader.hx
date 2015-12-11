package loader;

import yloader.valueObject.Response;
import yloader.impl.js.XMLHttpRequestLoader;
import utils.Common;
import yloader.valueObject.Request;
import msignal.Signal.Signal0;
import model.ImageListItem;

class ImagesLoader {

    public var list(default, null): ImageListItem;
    public var responseArrived = new Signal0();

    public function new() {
        loadImages();

    }

    private function loadImages(){

        var request = new Request(Common.Url);
        var xmlLoader = new XMLHttpRequestLoader(request);
        xmlLoader.onResponse = onResponse;
        xmlLoader.load();
    }

    private function onResponse(response: Response){
        if(response.success)
        {
            this.list = haxe.Json.parse(response.data);

            responseArrived.dispatch();
        }else{
            trace("request failed");
        }
    }
}