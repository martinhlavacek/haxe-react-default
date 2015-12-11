package ;

import view.ImageAppProps;
import model.ImageItem;
import api.react.ReactDOM;
import api.react.React;
import js.Browser;
import loader.ImagesLoader;
class ReactMainProps {
    var _imageLoader: ImagesLoader;

    public function new() {
        _imageLoader =  new ImagesLoader();
        _imageLoader.responseArrived.addOnce(responseArrived);
    }

    function responseArrived(){
        var list = _imageLoader.list.images;
        if(list != null){
            CreateReact(list);
        }
    }

    public function CreateReact(list: Array<ImageItem>)
    {
        ReactDOM.render(
            React.createElement(ImageAppProps,{data: list}),
            Browser.document.getElementById('app')
        );
    }
}
