

fn add(vec:&[i32])->Option<i32>{
    let mut _num=0i32;
    let mut _fg=true;
    let len=vec.len();
    for idx in 0..(len){
        match _num.checked_add(vec[idx]){
            Some(result)=>_num=result,
            None=> {_fg=false;break}
        }
    }
    if _fg==true{
        Some(_num)
    }else{
        None
    }
}

fn main(){
    let vec=vec![1,2,3];
    println!("{:?}",add(&vec));

    let vec2=vec![2147483647,2];
    println!("{:?}",add(&vec2));
}
