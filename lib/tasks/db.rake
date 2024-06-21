namespace :db do
  namespace :load do
    desc 'Load the seed data of status_evaluation'
    task status: :environment do
        data = YAML.load_file('lib/load_data/status_evaluatoin.yml')
        data.each do |row|
          StatusEvaluation.create!(
            step: row['step'],
            description: row['description']
          )
      end
    end
  end
end
