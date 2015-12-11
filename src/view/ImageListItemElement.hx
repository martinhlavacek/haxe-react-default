package view;
import api.react.ReactComponent.ReactComponentOfProps;
import model.ImageItem;
import api.react.React;
typedef ImageItemProps = {
data: ImageItem
}

class ImageListItemElement extends ReactComponentOfProps<ImageItemProps>{
    public function new (){
        super();
    }

    override public function render(){
        var entry: ImageItem = props.data;
        return React.createElement("img",{key: entry.id, src: entry.url,width: "150", height: "200"});
    }
}