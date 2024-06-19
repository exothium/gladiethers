// define the interface
#[dojo::interface]
trait IActions {
    fn enlist(ref world: IWorldDispatcher);
}

// dojo decorator
#[dojo::contract]
mod actions {
    use super::{IActions};
    use starknet::{ContractAddress, get_caller_address};
    use gladiethers::models::{
        position::{Position, Vec2}, moves::{Moves, Direction, DirectionsAvailable},
        gladiether::Gladiether
    };

    #[abi(embed_v0)]
    impl ActionsImpl of IActions<ContractState> {
        //TODO: OZ ERC20 transfer testnet
        fn enlist(ref world: IWorldDispatcher) {
            // Get the address of the current caller, possibly the player's address.
            let player = get_caller_address();
            // Retrieve the player's current position from the world.
            let position = get!(world, player, (Gladiether));

            // Update the world state with the new data.
            // 1. Set player initial gladiether power.

            let gladiether = Gladiether {
                player, power: 10, luck_point: 5, is_king: false, in_arena: false,
            };

            set!(world, (gladiethers));
        }

        // Implementation of the move function for the ContractState struct.
        fn move(ref world: IWorldDispatcher, direction: Direction) {
            // Get the address of the current caller, possibly the player's address.
            let player = get_caller_address();

            // Retrieve the player's current position and moves data from the world.
            let (mut position, mut moves) = get!(world, player, (Position, Moves));

            // Deduct one from the player's remaining moves.
            moves.remaining -= 1;

            // Update the last direction the player moved in.
            moves.last_direction = direction;

            // Calculate the player's next position based on the provided direction.
            let next = next_position(position, direction);

            // Update the world state with the new moves data and position.
            set!(world, (moves, next));
            // Emit an event to the world to notify about the player's move.
            emit!(world, (Moved { player, direction }));
        }
    }
}