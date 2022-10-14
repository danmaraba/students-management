class UsersController < ApplicationController
    before_action :authorize, only: [:show]
    def create
        student = Student.create(student_params)
        if student.valid?
            session[:student_id] = student.id
            render json: student, status: :created
        else
            render json: { error: student.errors.full_messages }, status: :unprocessable_entity
        end
    end
    def show
        student = Student.find_by(id: session[:student_id])
        render json: student
    end
    private

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :student_id
    end

    def student_params
        params.permit(:username, :password, :password_confirmation)
    end
end
