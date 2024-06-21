FactoryBot.define do
  factory :quiz do
    question { "MyString" }
    alternatives { "MyString" }
    correct_answer { "MyString" }
    student_answer { "MyString" }
    evaluation_id { nil }
  end
end
