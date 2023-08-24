
pub fn bubble_sort(array:&mut [i32]){
    let len=array.len();
    for i in 0..(len -1){
        for j in 1..(len-i){
            if array[j-1] >array[j]{
                array.swap(j-1,j);
            }
        }
    }
}

pub fn bubble_sort2<T:PartialOrd>(array:&mut [T]){
    let len=array.len();
    for i in 0..(len -1){
        for j in 1..(len-i){
            if array[j-1] >array[j]{
                array.swap(j-1,j);
            }
        }
    }
}

fn main() {
    let mut arr=vec![2,9,1,5,7,3,4,6,8];
    bubble_sort(&mut arr);
    println!("{:?}",arr);

    let mut arr2=vec![2,9,1,5,7,3,4,6,8];
    bubble_sort2(&mut arr2);
    println!("{:?}",arr2);

    let mut arr3=vec![2.2,9.9,1.1,5.5,7.7,3.3,4.4,6.6,8.8];
    bubble_sort2(&mut arr3);
    println!("{:?}",arr3);

    let mut arr4=vec![
        String::from("aaa"),
        String::from("bbb"),
        String::from("ccc"),
        String::from("ddd"),
        String::from("eee"),
        String::from("fff"),
    ];
    bubble_sort2(&mut arr4);
    println!("{:?}",arr4);


}
