 const f=document.querySelector('form')
f.addEventListener('submit',function(e){
    e.preventDefault();
    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const result=document.querySelector('#results');
    if(height===''||height<0||isNaN(height)){
        result.innerHTML = `Enter a valid height ${height}`;
    }
    else if(weight===''||weight<0||isNaN(weight)){
        result.innerHTML = `Enter a valid height ${weight}`;
    }
    else{
        const bmi=((weight*1000)/(height*height)).toFixed(2);
        result.innerHTML = `<span>Answer=${bmi}</span>`;
        
        const para1 = document.querySelector('#p1');
        const para2 = document.querySelector('#p2');
        const para3 = document.querySelector('#p3');
        if(bmi<18.6){
           para1.innerHTML = `<p>Under Weight = Less than 18.6<p>`
           para2.innerHTML = ''
           para3.innerHTML = ''
            
        }
        if(bmi>=18.6 && bmi<=24.9){
            para1.innerHTML =''
            para2.innerHTML = '<p>Normal Range = 18.6 and 24.9</p>'
            para3.innerHTML = ''
            
        }
        if(bmi>24.9){
            para1.innerHTML = ''
            para2.innerHTML = ''
            para3.innerHTML = '<p>Overweight = Greater than 24.9</p>'
            
            

        }
    }
})