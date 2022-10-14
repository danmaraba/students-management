class CreateCourses < ActiveRecord::Migration[7.0]
  def change
    create_table :courses do |t|
      t.string :department
      t.integer :student_id
      t.integer :tutor_id

      t.timestamps
    end
  end
end
