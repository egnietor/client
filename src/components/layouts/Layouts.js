import { Children } from "react";
import Navigation from "../Navigation";

export default function Layout({ children }) {
    return (
        <div>
            <Navigation />
            {children}
            <h1>Footer</h1>
        </div>
    )
}