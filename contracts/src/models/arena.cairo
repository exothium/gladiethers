use starknet::ContractAddress;

#[derive(Model, Copy, Drop, Serde)]
struct GladietherArena {
    #[key]
    game_id: GameID,
    player_one: ContractAddress,
    player_two: ContractAddress,
    status: GameStatus,
}

//TODO: Look into a counter for the game_id
#[derive(Copy, Drop, Serde, Introspect)]
struct GameID {
    id: u128,
}

#[derive(Serde, Copy, Drop, Introspect, PartialEq)]
enum GameStatus {
    Spectating,
    InArena,
    Exiting,
}

impl GameStatusIntoFelt252 of Into<GameStatus, felt252> {
    fn into(self: GameStatus) -> felt252 {
        match self {
            GameStatus::Spectating => 0,
            GameStatus::InArena => 1,
            GameStatus::Exiting => 2,
        }
    }
}
