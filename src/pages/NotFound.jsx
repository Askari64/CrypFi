import Spline from "@splinetool/react-spline";

function NotFound() {
  return (
    <div className=" flex flex-col justify-center items-center font-bold text-5xl h-screen">
      <h1>404 - Page Not Found</h1>
      <h2>Temporary Page</h2>
      <br /><br/>
      <Spline scene="https://prod.spline.design/RRKH1m8AatXBacys/scene.splinecode" />
    </div>
  );
}
export default NotFound;
