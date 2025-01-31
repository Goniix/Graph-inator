export default async function selectAll(){
    let res;
    await fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response error');  
            }
            return response.json();
        })
        .then(data => {
            res = data;
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
    return res;
}