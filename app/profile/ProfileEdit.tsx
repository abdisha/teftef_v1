import {Image, Text, TouchableOpacity, View} from "react-native";
import {useState} from "react";
import {Formik} from "formik";
import TextInputWithIcon from "@/app/components/TextInputWithIcon";
import CalendarInput from "@/app/components/CalendarInput";
import GenderTabInput from "@/app/components/GenderTabInput";
import * as Yup from "yup";
import {useRouter} from "expo-router";

const userSchema = Yup.object({
    firstName: Yup.string().required('Name is required'),
    lastName: Yup.string().required('Name is required'),
    dateOfBirth: Yup.string(),
    gender: Yup.string().min(7, 'Password is too short').required('Password is required'),
});
const ProfileEdit= ()=>{
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
        <View className=" flex flex-1  items-center">
            <View className="flex flex-row items-center mt-10 mb-10 ">
                <Image
                    style={{objectFit: "contain",}}
                    source={require('@/assets/images/logo.png')} // Replace with your actual logo path
                    className="w-10 h-10 "
                />
                <Text className="font-semibold text-2xl text-primary ">Personal Information</Text>
            </View>
            <Formik  initialValues={initialValues}
                    validationSchema={userSchema} onSubmit={handleSubmit}>

                {({ handleBlur, handleChange, isSubmitting }) => (
                    <View className="mt-3 w-3/4">
                        <TextInputWithIcon label={"First Name"} returnKeyType={'next'} iconName="person" placeholder="Entry First Name" />
                        <TextInputWithIcon label="Last Name" returnKeyType={'next'} iconName="person" placeholder="Entry Last Name" />

                        <CalendarInput returnKeyType={"next"} date={null} onChangeDate={() => { }} placeholder="Entry Date of Birth" />
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

export default ProfileEdit;