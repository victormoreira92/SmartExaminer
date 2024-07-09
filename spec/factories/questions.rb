FactoryBot.define do
  factory :question do
    question { Faker::Lorem.sentence }
    feedback { Faker::Lorem.paragraph }
    type { (0..4).to_a.sample }
    points { Faker::Number.between(from: 0, to: 4) }
    correct_answer { Faker::Lorem.sentence }
    alternatives { Faker::Lorem.sentence }
  end
end
