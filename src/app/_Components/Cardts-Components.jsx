import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Cardts = ({ movie, image }) => {
  return (
    <Card className="w-[300px] bg-black ">
      <CardHeader>
        <CardDescription>
          <img src={image} alt={movie} className="w-full h-full" />
        </CardDescription>
        <CardTitle className="text-xl">{movie}</CardTitle>

        <CardContent>
          <p className="text-sm text-gray-500">
            Add your movie description here.
          </p>
        </CardContent>
        <CardFooter>
          <Button className="bg-red-500 text-white hover:bg-red-600">
            Remove
          </Button>
        </CardFooter>
      </CardHeader>
    </Card>
  );
};

export default Cardts;
