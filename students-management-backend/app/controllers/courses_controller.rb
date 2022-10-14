class CoursesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_not_found_response
    def index
        courses = Course.all
        render json: courses
    end
    def create
        course = Course.create!(params_course)
        student = Student.find(course.student_id)
        render json: student, status: :created
    end
    private
    def params_course
        params.permit(:department, :student_id, :tutor_id)
    end
    def render_not_found_response
        render json: { error: ["validation errors"] }, status: :unprocessable_entity
    end
end
