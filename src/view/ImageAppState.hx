package view;

import api.react.ReactComponent;
import api.react.React;

import loader.ImagesLoader;
import model.ImageItem;

typedef ImageItemsState = {
    data:Array<ImageItem>
}

class ImageAppState extends ReactComponentOfState<ImageItemsState> {

    var _imageLoader:ImagesLoader = new ImagesLoader();

    public function new() {
        super();
        _imageLoader.responseArrived.addOnce(responseArrived);
    }

    function responseArrived()
    {
        setState({data: _imageLoader.list.images});
    }

    override public function render(){

        return React.createElement("div",{align: "center", display: "inline-block",margin: "0 20px 0 20px"},createChildern());
    }

    function createChildern():Array<ReactComponent>
    {
        var result: Array<ReactComponent> = [];

        if(state != null)
        {
            var id:Int = 0;
            for (entry in state.data)
            {
                id++;
                result.push(React.createElement(ImageListItemElement,{key:id,data: entry}));
            }
        }

        return result;
    }
}
