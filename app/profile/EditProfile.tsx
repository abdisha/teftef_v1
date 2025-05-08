import {Button, Image, Text, TouchableOpacity,StyleSheet, View} from "react-native";
import {useState} from "react";
import {Formik} from "formik";
import TextInputWithIcon from "@/app/components/TextInputWithIcon";
import CalendarInput from "@/app/components/CalendarInput";
import GenderTabInput from "@/app/components/GenderTabInput";
import * as Yup from "yup";
import * as ImagePicker from 'expo-image-picker';
import {useRouter} from "expo-router";

const userSchema = Yup.object({
    firstName: Yup.string().required('Name is required'),
    lastName: Yup.string().required('Name is required'),
    dateOfBirth: Yup.string(),
    gender: Yup.string().min(7, 'Password is too short').required('Password is required'),
});
const EditProfile= ()=>{
    const [image, setImage] = useState<string | null>(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images', 'videos'],
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };
    const router = useRouter();
    const initialValues = {
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        gender: ''
    };
    const [gender, setGender] = useState<string>('Male');
    const handleSubmit = (values:typeof initialValues) => {
        // Handle form submission here
        console.log(values);

    };


    return (
        <View  className="flex justify-center px-8 mt-4">
            <View className="flex items-center ">
                        <Image
                    style={{objectFit: "contain",}}
                    source={image?{ uri: image }:require("@/assets/images/avatar.png")} // Replace with your actual logo path
                    className="w-30 h-30"
                />
                <TouchableOpacity  onPress={pickImage} className="bg-primary my-2  h-12 justify-center items-center text-white  rounded-xl">
                    <Text className="font-semibold text-white px-8">Change</Text>
                </TouchableOpacity>
            </View>
            <Formik  initialValues={initialValues}
                    validationSchema={userSchema} onSubmit={handleSubmit}>

                {({ handleBlur, handleChange, isSubmitting }) => (
                    <View className="mt-3">
                        <TextInputWithIcon label={"First Name"} returnKeyType={'next'} iconName="person" placeholder="Entry First Name" />
                        <TextInputWithIcon label="Last Name" returnKeyType={'next'} iconName="person" placeholder="Entry Last Name" />

                        <CalendarInput label={"Date Of Birth"} returnKeyType={"next"} date={null} onChangeDate={() => { }} placeholder="Entry Date of Birth" />
                        <GenderTabInput gender={gender} onChangeGender={setGender} />
                        <TouchableOpacity className="w-full h-14 rounded-2xl justify-center mt-2  bg-primary"
                                          onPress={() => {
                                              router.navigate("/home")
                                          }}>
                            <Text className="text-lg text-center text-base100 font-semibold ">Register</Text>
                        </TouchableOpacity>

                    </View>

                )}
            </Formik>
        </View>
    )
}

export default EditProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 200,
        height: 200,
    },
});