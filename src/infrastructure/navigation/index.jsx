import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import {
  SignIn,
  SignUp,
  CompleteRegistration,
  VerifyEmail,
  ForgotPassword,
  ResetPassword,
  ChangePassword,
  Home,
  Subject,
  Profile,
  LearningStat,
  TakeCourse,
  PreviewCourse,
  Referral,
  LearningPlan,
  SubscriptionMethod,
} from "../../pages/index.jsx";

import { CourseLessons } from "../../pages/Learn/TakeCourse/Sections/CourseLessons/CourseLessons.section.jsx";
import { Exercises } from "../../pages/Learn/TakeCourse/Sections/Exercises/Exercises.section.jsx";
import { ExercisePreview } from "../../pages/Learn/TakeCourse/Sections/ExercisePreview/ExercisePreview.section.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Pages after Authentication */}
        <Route path="/" element={<Home />} />
        <Route path="/subject" element={<Subject />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/learningStat" element={<LearningStat />} />
        <Route path="/previewCourse" element={<PreviewCourse />} />
        <Route path="/takeCourse" element={<TakeCourse />} />
        {/* <Route path="lessons" element={<CourseLessons />} />
          <Route path="exercises" element={<Exercises />} />
          <Route path="exercisePreview" element={<ExercisePreview />} /> */}
        {/* </Route> */}
        <Route path="/referral" element={<Referral />} />
        <Route path="/learningPlan" element={<LearningPlan />} />
        <Route path="/subscriptionMethod" element={<SubscriptionMethod />} />

        {/* Authentication Page Routes */}
        <Route path="/signUp" element={<SignUp />} />
        <Route
          path="/completeRegistration"
          element={<CompleteRegistration />}
        />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/verifyEmail" element={<VerifyEmail />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/changePassword" element={<ChangePassword />} />
        {/* <Route path="/signIn" element={<SignIn />} /> */}
        {/* <Route path="/signUp" element={<SignUp />} /> */}
        {/* <Route path="/signIn" element={<SignIn />} /> */}
        {/* <Route path="/create-post" element={<CreatePost />} /> */}
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's No Page like this!!!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
