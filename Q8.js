//Input: intervals = [[0,30],[5,10],[15,20]]
//Output: false

function MeetingAttend(a){
    for(let i = 0;i<a.length ;i++){
        if(a[i][i+1]>a[i+1][i]  ){
            return false
        }
        else{
            return true
        }


    }
}

let a = [[0,5],[5,10],[15,20]]
console.log(MeetingAttend(a))