defmodule ElixirGraphqlApp.Repo.Migrations.NameRequired do
  use Ecto.Migration

  def change do
    alter table(:users) do
      modify :name, :string, null: false
    end
  end
end
