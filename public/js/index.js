$(document).ready(function(){
    $(document).on('click','.card-action a',function(){
        newCard(this);
    })
})


function newCard(t){
    var el = document.createElement('div');
    el.setAttribute('class','card');
    el.style.top = -1*(t.parentNode.parentNode.offsetHeight + 100) + 'px'
    el.innerHTML = '<div class="card-image"><img src="http://materializecss.com/images/sample-1.jpg"><span class="card-title"> </span></div><div class="card-content"><p>Paysage de montagne</p></div><div class="card-action"><a class="waves-effect waves-light btn">-2</a><a class="btn waves-effect waves-light">-1</a><a class="btn waves-effect waves-light" href="#">+1</a><a class="btn waves-effect waves-light" href="#">+2</a></div>';
    document.getElementById('mainCont').appendChild(el);
    $(t.parentNode.parentNode).fadeOut(800,function(){
        t.parentNode.parentNode.parentNode.removeChild(t.parentNode.parentNode)
    }); 
    $(".card").animate({top : '30px'},1500)
      
}