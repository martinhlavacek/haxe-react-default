package view;

import api.react.ReactComponent.ReactComponentOfProps;
import model.ImageItem;
import api.react.React;


typedef ImageListItemElementProps = {
    var key:Int;
    var data:ImageItem;
}

class ImageListItemElement extends ReactComponentOfProps<ImageListItemElementProps>
{

    public function new (props:ImageListItemElementProps)
    {
        super(props);
    }

    override public function render()
    {
        var entry:ImageItem = props.data;
        return React.createElement("img", {key:entry.id, src:entry.url, width:"150", height:"200"});
    }
}