export default function Header() {
  return (
    <form>
        <label>
            Name:
            <input type="text" name="name" />
        </label>
        <br />
        <label>
            Email:
            <input type="email" name="email" />
        </label>
        <br />
        <input type="submit" value="Submit" />
    </form>
  );
}