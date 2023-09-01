
trait Area{
    fn area(&self)->f64;
}

struct Triangle{
    s:f64,
    h:f64
}

impl Area for Triangle{
    fn area(&self)->f64{
        0.5*self.s*self.h
    }
}

struct Square{
    l:f64
}

impl Area for Square{
    fn area(&self)->f64{
        self.l*self.l
    }
}

struct Rectangle{
    l:f64,
    h:f64
}

impl Area for Rectangle{
    fn area(&self)->f64{
        self.l*self.h
    }
}

fn calc_area<T :Area>(shap:T)->f64{
    shap.area()
}


fn main(){
    let square=Square{l:6.1};
    println!("{:?}",calc_area(square));

    let triangle=Triangle{s:6.1,h:2.2};
    println!("{:?}",calc_area(triangle));

    let rectangle=Rectangle{l:6.1,h:2.3};
    println!("{:?}",calc_area(rectangle));
}
