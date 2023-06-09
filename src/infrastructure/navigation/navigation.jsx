import {
  BrowserRouter,
  Route,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import {
  ErrorPage,
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

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/subject",
    element: <Subject />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/learningStat",
    element: <LearningStat />,
  },
  {
    path: "/previewCourse",
    element: <PreviewCourse />,
  },
  {
    path: "/takeCourse",
    element: <TakeCourse />,
    children: [
      {
        path: "lessons",
        element: <CourseLessons />,
      },
      {
        path: "exercises",
        element: <Exercises />,
      },
    ],
  },

  //  Pages after Authentication
  {
    path: "/referral",
    element: <Referral />,
  },
  {
    path: "/learningPlan",
    element: <LearningPlan />,
  },
  {
    path: "/subscriptionMethod",
    element: <SubscriptionMethod />,
  },
  // Authentication Page Routes
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/completeRegistration",
    element: <CompleteRegistration />,
  },
  {
    path: "/signIn",
    element: <SignIn />,
  },
  {
    path: "/verifyEmail",
    element: <VerifyEmail />,
  },
  {
    path: "/forgotPassword",
    element: <ForgotPassword />,
  },
  {
    path: "/resetPassword",
    element: <ResetPassword />,
  },
  {
    path: "/changePassword",
    element: <ChangePassword />,
  },
  // {
  //   path: "/",
  //   element: <Root />,
  // },
]);

export default Router;
