import { Circle } from "better-react-spinkit";

function Loading() {
    return (
        <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
            <div>
                <img src="http://assets.stickpng.com/images/5a4e2ef62da5ad73df7efe6e.png"
                    alt="placeholder"
                    style={{ marginBottom: 10 }}
                    height={200}
                />
                <Circle color="black" size={60} />
            </div>
        </center>
    );
}

export default Loading;