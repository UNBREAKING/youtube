
class Field{
    constructor(){}


}

Field.prototype.onStart=function () {
    this.createSearchAndButton();
}

Field.prototype.createSearchAndButton= function () {
    let Header=document.createElement('header');
    Header.setAttribute('class','header');
    let Div=document.createElement('div');
    Div.setAttribute('class','center');
    let Input=document.createElement('input');
    Input.setAttribute('name','Searcher');
    let Button=document.createElement('button');
    let Icon=document.createElement('i');
    Icon.setAttribute('class','fa fa-2x fa-search');

    let Text=document.createElement('a');
    let H3=document.createElement('h3');
    H3.innerHTML='YouTubeHelper';
    H3.setAttribute('class','logo');
    Text.appendChild(H3);


    Button.appendChild(Icon);
    Div.appendChild(Input);
    Div.appendChild(Button);
    Header.appendChild(Div);
    Header.appendChild(Text);
    document.body.appendChild(Header);
}


let MyField= new Field();
MyField.onStart();
