class StudentsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_not_valid_response
    def index
        students = Student.all
        render json: students, status: :ok
    end
    def show
        students =find_student
        render json: students
    end
    def create
        student = Student.create!(students_params)
        render json: student, status: :created
    end
    def update
        student = find_student
        student.update!(students_params)
        render json: student, status: :accepted
    end
    def destroy
        student = find_student
        student.destroy
        head :no_content
    end
    private
    def find_student
        Student.find(params[:id])
    end
    def students_params
        params.permit(:name,:gender,:course,:year_of_study,:username,:email,:password,:password_confirmation)
    end
    def render_not_found_response
        render json: { error: "Student not found" }, status: :not_found
    end
    def render_not_valid_response
        render json: { error: "Invalidation errors" }, status: :unprocessable_entity
    end
end
