package view;

import view.ImageListItemElement.ImageListItemElementProps;
import api.react.React;
import api.react.ReactComponent;
import model.ImageItem;

//typedef ImageCollectionProps ={
//    key:Int,
//    data:Array<ImageItem>
//}

typedef ImageCollectionProps ={
    var data:Array<ImageItem>;
}


class ImageCollection extends ReactComponentOfProps<ImageCollectionProps>
{
    public function new()
    {
        super();
    }

    override public function render()
    {
        return React.createElement("div",{align: "center", display: "inline-block",margin: "0 20px 0 20px"},createChildern());
    }

    function createChildern():Array<ReactComponent>
    {
        var result: Array<ReactComponent> = [];
        var id:Int = 0;

        for (entry in props.data)
        {
            id++;
            result.push(React.createElement(ImageListItemElement,({key:id, data: entry}:ImageListItemElementProps)));
        }

        return result;
    }
}


