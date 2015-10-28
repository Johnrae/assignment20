export default function(data){
  return `
    <div class="person">
      <h1>${data.name}<h1>
      <p>${data.phone}</p>
      <p>${data.location}</p>
    </div>
    `
};