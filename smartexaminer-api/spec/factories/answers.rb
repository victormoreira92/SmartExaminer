FactoryBot.define do
  factory :answer do
    answer_content { "MyString" }
    correct { false }
    type_answer { 1 }
  end
end
