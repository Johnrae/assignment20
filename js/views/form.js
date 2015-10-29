export default function(data) {
  return `
    <div class="formelem">
      <h2>Add New Contact</h2>
      <form>
        <input type="text" data-name label="Full Name">
        <br>
        <input type="text" data-email label="Email">
        <br>
        <input type="text" data-location label="City">
        <br>
        <input type="text" data-phone label="Phone Number">
        <br>
        <input type="submit">
      </form>
    </div>
  `;
};