import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import {PaletteTree} from "./palette";
import PhoneLogin from "@/app/onboarding/PhoneLogin";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/PhoneLogin">
                <PhoneLogin/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;