let arr = {
  'c3': [],
  'c2': [],
  'c1': []
}
let c = {
  'c1': ['c2', 'c3'],
  'c2': ['c1', 'c3'],
  'c3': ['c1', 'c2'],
}
function print(n) {
  let temp =''
  for (let i=n-1;i>=0;i--) {
    for (var j of ['c1','c2','c3']) {
      temp+=(arr[j][i]||0)+'\t'
    }
    temp+='\n'
  }
  console.log(temp)
}
let count = 0
async function  fun(n, a , b ,p){
  count++
  //console.log(count)
//console.log(JSON.stringify(arr))
let m =  c[a].indexOf(b)
//console.log(m)
let next 
 m?next=c[a][0]:next=c[a][1]
//console.log(n,a,b,next)
if (n == 1){
  arr[b].push(arr[a].pop())
  let {c1,c2,c3}=arr
  print(p)
return 1
}

else{
  //console.log(n,a,b,next,'else')
await fun(n - 1, a, next,p)
await fun(1,a,b,p)
//console.log(n,a,b,next,'else')
//console.log('after q',n,a,b,next)
await fun(n - 1, next,b,p)
return count
}

}
async function mmm(n){
  for(let i=n;i>0;i--)
  arr.c1[n-i]=i
  print(n)
  console.log(await fun(n,'c1','c3',n))
}


//mmm(4)
console.log(document.getElementsByTagName('html')[0].children[0].innerHTML)