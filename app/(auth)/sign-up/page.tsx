"use client";

import React from "react";
import AuthForm from "@/components/forms/AuthForm";
import { SignUpSchema } from "@/lib/validations";

function SignUp() {
  return (
    <AuthForm
      formType="SIGN_UP"
      schema={SignUpSchema}
      defaultValues={{ email: "", password: "", username: "", name: "" }}
      onSubmit={(data) => Promise.resolve({ success: true, data })}
    />
  );
}

export default SignUp;
