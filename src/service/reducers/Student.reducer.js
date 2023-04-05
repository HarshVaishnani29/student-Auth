import { CREAT_STU, DELETE_STU, GET_INFO, UPDATE_STU, LOADING } from "../constant/actionType"

const initialState = {
    studentList: [],
    studentInfo: {},
    isLoading: false
}

const StudentReducer = (state = initialState, action) => {

    switch (action.type) {
        case CREAT_STU:
            return {
                ...state, studentList: [
                    ...state.studentList, action.payload
                ], isLoading: false
            }
            break;

        case DELETE_STU:
            const DStu = state.studentList.filter((Stu) => Stu.id !== action.payload)
            return {
                ...state,
                studentList: DStu,
                isLoading: false
            }
            break;

        case GET_INFO:
            const GetInfo = state.studentList.filter((Stu) => Stu.id === action.payload)
            return {
                ...state,
                studentInfo: GetInfo[0],
                isLoading: false
            }
            break;

        case UPDATE_STU:
            const UpdateStu = state.studentList.map((Stu) => {
                if (Stu.id === action.payload.id) {

                    return action.payload
                }
                return Stu
            })
            return {
                ...state,
                studentList: UpdateStu,
                isLoading: false
            }
            break;
        case LOADING: {
            return {
                ...state,
                isLoading: true
            }
        }
            break;

        default:
            return state;
    }
}

export default StudentReducer;