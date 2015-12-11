package parser;
import js.html.DivElement;
import js.Browser;

class HtmlParser {
    public function new() {
    }

    public function Generate(data: Array<String>){

        for(img in data){
            var image = CreateImage(img);
            var div = CreateDivWithImage(image);


            Browser.document.getElementById('defaultApp').appendChild(div);
        }
    }

    function CreateImage(img: String): js.html.Image{
        var image = new js.html.Image(150,200);
        image.src = img;

        return image;
    }

    function CreateDivWithImage(image: js.html.Image): DivElement{
        var div = Browser.document.createDivElement();
        div.align = "center";
        div.appendChild(image);
        return div;
    }


}
