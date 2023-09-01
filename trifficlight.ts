enum TrifficLight{
    Red,
    Yellow,
    Green
}

impl TrifficLight{
    fn time(&self)->i32{
        match self{
            Self::Red => 45,
            Self::Green => 15,
            Self::Yellow => 3
        }
    }
}

fn main(){
    let green=TrifficLight::Green;
    println!("绿灯持续时间{:?}s",green.time());

    let red=TrifficLight::Red;
    println!("红灯持续时间{:?}s",red.time());

    let yellow=TrifficLight::Yellow;
    println!("黄灯持续时间{:?}s",yellow.time());
}
