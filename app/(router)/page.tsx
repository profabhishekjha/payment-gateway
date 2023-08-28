import RazorpayButton from "@/components/razorpaybutton";

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to our store</h1>
      <RazorpayButton amount={1} />
    </div>
  );
};

export default HomePage;
