class Tutor < ApplicationRecord
    has_many :courses
    has_many :students,through: :courses
    validates :name, presence:true
    validates :course, presence:true
end
