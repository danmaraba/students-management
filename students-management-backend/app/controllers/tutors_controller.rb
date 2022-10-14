class TutorsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_not_valid_response
    def index
        tutors = Tutor.all
        render json: tutors, status: :ok
    end
    def show
        tutor =find_tutor
        render json: tutor
    end
    def create
        tutor = Tutor.create!(tutors_params)
        render json: tutor, status: :created
    end
    def update
        tutor = find_tutor
        tutor.update!(tutor_params)
        render json: tutor
    end
    def destroy
        tutor = find_tutor
        tutor.destroy
        head :no_content
    end
    private
    def find_tutor
        Tutor.find(params[:id])
    end
    def tutors_params
        params.permit(:name,:course)
    end
    def render_not_found_response
        render json: { error: "tutor not found" }, status: :not_found
    end
    def render_not_valid_response
        render json: { error: "Invalidation errors" }, status: :unprocessable_entity
    end
end
