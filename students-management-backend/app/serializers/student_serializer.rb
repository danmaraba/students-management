class StudentSerializer < ActiveModel::Serializer
  attributes :name,:gender,:course,:year_of_study,:email,:username,:password_digest
  has_many :tutors
end
