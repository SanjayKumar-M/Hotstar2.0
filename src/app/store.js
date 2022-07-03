import { configstore } from "firebase-tools/lib/configstore";
import userSlice from "../features/users/userSlice";
import userReducer from "../features/users/userSlice";

export const store = configureStore({

        reducer: {
            user: userSlice
        },
}); 