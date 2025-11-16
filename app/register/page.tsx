import UserRegistrationForm from '@/components/user-registration-form'

export default function RegisterPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5 text-center">Register</h1>
      <UserRegistrationForm />
    </div>
  )
}