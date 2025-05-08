import {Image, TouchableOpacity, Text, View, TextInput} from "react-native";
import {Formik} from "formik";
import TextInputWithIcon from "@/app/components/TextInputWithIcon";

const EditPortfolio = () => {
    return (
        <View  className="flex justify-center px-8 mt-10">

            <View>
                <Text className="text-lg text-gray-600 mb-4">Add your portfolio to showcase your skills and experience</Text>
                <TextInputWithIcon iconName={'person'} label={'Service category'} placeholder={'Service category'}/>
                <TextInputWithIcon numberOfLines={3} iconName='' label={'Service'} placeholder={'Service'}/>
                <TextInputWithIcon numberOfLines={3} iconName='Service' label={'Service'} placeholder={'Service'}/>
            </View>

        </View>
    );
}

export default EditPortfolio;