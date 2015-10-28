export default function(data) {
  return `
    <div class="formelem">
      <form>
        <input type="text" data-name>
        <br>
        <input type="text" data-email>
        <br>
        <input type="text" data-location>
        <br>
        <input type="text" data-phone>
        <br>
        <input type="submit">
      </form>
    </div>
  `;
};