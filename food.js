class Food
{
    constructor()
    {
        this.foodstock=0;
        this.lastfed;
        this.image=loadImage("Milk.png")
    }
    getfoodstock()
    {
return this.foodstock;
    }
    updatefoodstock(foodStock)
    {
this.foodstock=foodStock;
    }
    deductfood()
    {
        if(this.foodstock<=0)
        {
          this.foodstock=0;
        }
        else{
          this.foodstock=this.foodstock-1
        }
    }
    getfedtime(lastfed)
    {
this.lastfed=lastfed;
    }

        
         
    
    display()
    {
        imageMode (CENTER);

        var x=70,y=100;
        if(this.foodstock!=0)
        {
            for(var i=0;i<this.foodstock;i++)
            {
                if(i%5==0)
                {
                    x=100;
                    y=y+70
                }
            image (this.image,x,y,50,50);
            x=x+30;
                    }
        }
    }
}