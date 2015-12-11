package ;

import model.ImageItem;
import model.ImageListItem;
import view.ImageCollection;
import api.react.React;
import api.react.ReactComponent;
import loader.ImagesLoader;

typedef RootState = {
    var data:Array<ImageItem>;
}


class Root extends ReactComponentOfState<RootState>
{
    var loader: ImagesLoader;

    public function new(props)
    {
        super(props);
        loader =  new ImagesLoader();
        loader.responseArrived.addOnce(onResponseArrived);
        loader.loadImages();
    }

    function onResponseArrived(list: ImageListItem)
    {
        setState({data:list.images });
    }

    override function render()
    {
        if(state !=null && state.data != null)
        {
            return React.createElement(ImageCollection,({data: state.data}:ImageCollectionProps));
        }

        return null;
    }
}
